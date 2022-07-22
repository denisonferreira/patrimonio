// rode o dockercomposer
// #docker-compose up --build -d

// e acesse localhost:6868

// obs.: caso não funcione é porque o data/db tá subindo para o git e precisa ser incluído no gitignore

//BUG quando ele inicia pela primeira vez não é criada a tabela do banco
//Para resolver é só dar um #docker stop patrimonio_app_1 e depois um docker start patrimonio_app_1