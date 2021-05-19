# C.L.A.R.A
C.L.A.R.A,ou Clara, (Central Lógica para Atendimento e Redirecionamento de Aluno) e um chatbot que pretende ajudar os alunos do CEFET-MG Campus V (Divinopolis) sobre os assuntos relacionados a instituicao, as aulas e de forma geral. Ela e representada como uma aluna da instituicao com o intuito de se aproximar mais do usuario final.

# Como rodar

Voce precisara do Node e uma conta no Discord.


Como Clara esta em desenvolvimento, foi escolhido a plataforma de bots do discord para o trabalho. Mais tarde ela apresentara modo CLI.

Baixe o node v16.1.0 junto com o npm. Apos isso,execute os comandos abaixo:

```
$ git clone https://github.com/Numb4r/C.L.A.R.A.git
$ cd C.L.A.R.A
$ npm install
```

Apos isso,precisaremos criar um arquivo ``config.json`` onde
ira ficar a chave do discord [Como criar um bot no Discord](https://www.techtudo.com.br/dicas-e-tutoriais/2020/01/como-criar-bot-no-discord.ghtml)

Dentro do arquivo ``config.json``, a estrutura deve ficar da seguinte forma
```
{
    "BOT_TOKEN":"botkey"
}
```
Apos isso,execute ``node discord.js`` e o chatbot estara disponivel para conversa.