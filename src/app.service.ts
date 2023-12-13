import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    const port = process.env.PORT || 3000;
    return `Boas-vindas ao meu projeto. Eu me chamo Ian Santos e informo que esse projeto rodando na porta: ${port}`;
  }
}
