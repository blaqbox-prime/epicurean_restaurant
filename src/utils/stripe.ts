import { loadStripe, Stripe} from '@stripe/stripe-js'


let stripePromise: Promise<Stripe | null>;

export default function getStripe(){
    if(!stripePromise) {
        stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!, {apiVersion: '2022-08-01'});
    }

    return stripePromise;
}
