export const createJob=async (newJobData)=>{

    const res=await fetch('http://localhost:5000/jobs',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(newJobData)
    });

    return res.json()
}


export const getJob=async(companyId, status='active')=>{

    const res=await fetch(`http://localhost:5000/jobs?companyId=${companyId}&status=${status}`);
    return res.json();
}


export const createCompany=async (newCompanyData)=>{

    const res=await fetch('http://localhost:5000/companies',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(newCompanyData)
    });

    return res.json()
}


export const uploadImageToImgBB = async (file) => {
  const formData = new FormData();
  formData.append("image", file);

  const res = await fetch(
    `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMAGE_UPLOAD_API}`,
    {
      method: "POST",
      body: formData,
    }
  );

  if (!res.ok) {
    throw new Error("Image upload failed");
  }

  const data = await res.json();
  return data.data.url; // returns the hosted image URL
};


export const getRecruiterCompany=async (recruiterId)=>{
    const res=await fetch(`http://localhost:5000/my/companies?recruiterId=${recruiterId}`);
    return res.json()
}


export const getCompanies=async ()=>{
    const res=await fetch(`http://localhost:5000/companies`);
    return res.json()
}


export const postApplication=async(applicationData)=>{
       const res=await fetch('http://localhost:5000/applications',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(applicationData)
    });

    return res.json()
}


export const getApplication=async(userId)=>{

    const res=await fetch(`http://localhost:5000/applications?userId=${userId}`);
    return res.json();
}


export const getPlan=async(planId)=>{
const res=await fetch(`http://localhost:5000/plans?plan_id=${planId}`);
return res.json()
}

export const createSubscription=async(subInfo)=>{
    const res=await fetch('http://localhost:5000/subscriptions',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(subInfo)
    });

    return res.json()
}

export const updateCompany=async(id, data)=>{
    const res=await fetch(`companies/${id}`, {
        method:'PATCH',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
    });
    return res.json()
}
