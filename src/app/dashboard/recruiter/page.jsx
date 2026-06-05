'use client'
import { useSession } from '@/app/lib/auth-client';
import React from 'react';
import {Spinner} from "@heroui/react";

const RecruiterHomePage = () => {

const {data: session, isPending}= useSession();
const user=session?.user;

if(isPending){
    return  <div className="flex flex-col items-center gap-2">
        <Spinner size="lg" />
      </div>
}

    return (
        <div>
           <h1 className='text-2xl'>Welcome back, {user?.name}</h1>
        </div>
    );
};

export default RecruiterHomePage;