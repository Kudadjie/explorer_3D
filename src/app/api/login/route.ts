/*
import { NextRequest, NextResponse } from "next/server";

export default function handler(req:NextApiRequest, res:NextApiResponse) {
    // Get data submitted in request's body.
    const body = req.body

    // Optional logging to see the responses
    // in the command line where next.js app is running.
    console.log('body: ', body)

    // Guard clause checks for first and last name,
    // and returns early if they are not found
    if (!body.username || !body.password) {
        // Sends a HTTP bad request error code
        return res.status(400).json({ data: 'Access details not found!' })
    }

    res.status(200).json({ data: `${body.username} ${body.password}` })
}

export async function POST(request:NextRequest){}*/
