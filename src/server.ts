import express, { request } from "express";
import{PrismaClient } from '@prisma/client'

const app = express()
const prisma = new PrismaClient()

app.get('./games',async (request, response)=>{
    const games = await prisma.game.findMany()
    return response.json(games);
});

app.post('./ads',(request, response)=>{
    // const gameID = request.params.id;

    return response.json([]);
});

app.get('/.games/:id/ads', (request,response)=> {
    return response.json([
       { id:1, name:'Anuncio1'},
       { id:2, name:'Anuncio2'},
       { id:3, name:'Anuncio3'},
       { id:4, name:'Anuncio4'},
       { id:5, name:'Anuncio5'},
    ])
})

app.get('/.games/:id/discord', (request,response)=> {
//const adId= request.params.id;

    return response.json([])
})

app.listen(3333)