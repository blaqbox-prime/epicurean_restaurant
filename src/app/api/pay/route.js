import { NextResponse } from "next/server"
import Stripe from "stripe";

export async function GET(req){
   console.log("server functions work")
   return NextResponse.json({success: "ok"}) 
}

export async function POST(req){
   const data = await req.json();
   console.log(data);
   
   try {
      const stripe = new Stripe(`${process.env.STRIPE_SECRET_KEY}`,{apiVersion: "2022-11-15"});

      const params = {
         mode: 'payment',
         line_items: data.map((item) => {
             return {

                 price_data: {
                     currency: 'zar',
                     product_data: {
                         name: item.title,
                         images: [item.imgUrl]
                     },
                     unit_amount: Math.round(item.price * 100),
                 },
                 adjustable_quantity: {
                     enabled: true,
                     minimum: 1,
                 },
                 quantity: item.quantity,
             }
         }),
         success_url: `${req.headers.get('origin')}/success`,
         cancel_url: `${req.headers.get('origin')}/?cancelled=true`,
       }

      //  Create Checkout Session
      const session = await stripe.checkout.sessions.create(params);

      return NextResponse.json(session) 
   }
   catch(error){
      console.error(error);
      return NextResponse.json(error);
   }

}