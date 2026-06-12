import 'server-only'

import Stripe from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export const PLAN_PRICE_ID={
    'seeker_pro': 'price_1TgqFr22hTS3EBA230ifudkh',
    'seeker_premium':'price_1TgzfL22hTS3EBA2ruHVd2Rn'
}