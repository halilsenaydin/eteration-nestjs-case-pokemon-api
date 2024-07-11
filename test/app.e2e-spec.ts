import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSGFsaWwgxLBicmFoaW0gxZ5FTkFZRElOIiwiaWF0IjoxNzIwNjc5MDg3LCJleHAiOjE3MjA2ODI2ODd9.rlCrX6ULJXpACIYGnHEJqOAe6MzcWw6tDeS3rliKRHo';
  const charId = '51a224b4-ff3e-48e5-98b7-160ee25425a3';
  const charTypeId = '004586f6-9caf-4aed-87bf-44bea08b9bdf';
  const charAbilityId = '0328bf74-9ab7-4b9d-8c0f-4e0bdf25bd35';
  const typeOfCharId = '0150bd31-e64d-4cde-b335-b9a0866461c9';
  const abilityOfCharId = '030def0e-dcf8-4ad8-b404-d05183573e51';

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();


    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(404);
  });

  it('/auth/token (POST)', () => {
    return request(app.getHttpServer())
      .post('/auth/token')
      .send({ name: "test-user" })
      .expect(201);
  });

  it('/pokemon/:startId/:endId (GET)', () => {
    return request(app.getHttpServer())
      .get(`/pokemon/1/10`)
      .expect(200);
  });

  it('/char Unauthorized (GET)', () => {
    return request(app.getHttpServer())
      .get('/char')
      .expect(401);
  });


  it('/char Authorization Success (GET)', () => {
    return request(app.getHttpServer())
      .get('/char')
      .set('Authorization', `Bearer ${token}`)
      .expect(200);
  });

  it('/char/:charId Authorization Success (GET)', () => {
    return request(app.getHttpServer())
      .get(`/char/${charId}`)
      .set('Authorization', `Bearer ${token}`)
      .expect(200);
  });

  it('/char/dto Authorization Success (GET)', () => {
    return request(app.getHttpServer())
      .get('/char/dto')
      .set('Authorization', `Bearer ${token}`)
      .expect(200);
  });

  it('/char/dto Authorization Success (GET)', () => {
    return request(app.getHttpServer())
      .get(`/char/dto/${charId}`)
      .set('Authorization', `Bearer ${token}`)
      .expect(200);
  });

  // /char-type
  it('/char-type (GET)', () => {
    return request(app.getHttpServer())
      .get('/char-type')
      .expect(200);
  });
  it('/char-type/:charTypeId (GET)', () => {
    return request(app.getHttpServer())
      .get(`/char-type/${charTypeId}`)
      .expect(200);
  });
  it('/char-type Success (POST)', () => {
    return request(app.getHttpServer())
      .post('/char-type')
      .send({ typeName: "test-type" })
      .expect(201);
  });

  // /char-ability
  it('/char-ability (GET)', () => {
    return request(app.getHttpServer())
      .get('/char-ability')
      .expect(200);
  });
  it('/char-ability/:charAbilityId (GET)', () => {
    return request(app.getHttpServer())
      .get(`/char-ability/${charAbilityId}`)
      .expect(200);
  });
  it('/char-ability Success (POST)', () => {
    return request(app.getHttpServer())
      .post('/char-ability')
      .send({ typeName: "test-ability" })
      .expect(201);
  });

  // /type-of-char
  it('/type-of-char (GET)', () => {
    return request(app.getHttpServer())
      .get('/type-of-char')
      .expect(200);
  });
  it('/type-of-char/dto (GET)', () => {
    return request(app.getHttpServer())
      .get('/type-of-char/dto')
      .expect(200);
  });
  it('/type-of-char/:typeOfCharId (GET)', () => {
    return request(app.getHttpServer())
      .get(`/type-of-char/${typeOfCharId}`)
      .expect(200);
  });
  it('/type-of-char/char/:typeOfCharId (GET)', () => {
    return request(app.getHttpServer())
      .get(`/type-of-char/char/${charId}`)
      .expect(200);
  });

  // /ability-of-char
  it('/ability-of-char (GET)', () => {
    return request(app.getHttpServer())
      .get('/ability-of-char')
      .expect(200);
  });
  it('/ability-of-char/:abilityOfCharId (GET)', () => {
    return request(app.getHttpServer())
      .get(`/ability-of-char/${abilityOfCharId}`)
      .expect(200);
  });
});
