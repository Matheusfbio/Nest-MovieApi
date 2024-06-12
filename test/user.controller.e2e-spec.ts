import { Test, TestingModule } from "@nestjs/testing";
import * as request from "supertest";
import { INestApplication } from "@nestjs/common";
import { UserModule } from "src/user/user.module";
import { AppController } from "src/app.controller";
import { AppService } from "src/app.service";

describe("UserController (E2E)", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [UserModule],
      controllers: [AppController],
      providers: [AppService], // Certifique-se de importar o módulo da sua aplicação aqui
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it("/user (POST)", (done) => {
    const createUserDto = {
      // Defina os dados necessários para criar um usuário aqui
      username: "matheus",
      firstName: "fabio",
      lastName: "Fabio",
      password: "Alegri@18",
      email: "Matheusfbio@gmail.com",
    };

    request(app.getHttpServer())
      .post("/user")
      .send(createUserDto)
      .expect(201) // Defina o código de resposta esperado, como 201 para criado com sucesso
      .end((err, res) => {
        if (err) return done(err);
        // Você pode realizar asserções adicionais aqui, se necessário
        done(res);
      });
  });

  // afterAll(async () => {
  //   await app.close();
  // });
});
