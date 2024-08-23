//
import { NextRequest } from "next/server"

export const runtime = 'edge'

export async function GET(req:NextRequest){

    console.log(req.url)

    return new Response(JSON.stringify({name:'john'}),{
        status:401,
    })
}

export async function POST(req:NextRequest){
    console.log("POST REQUEST",req.body)
}