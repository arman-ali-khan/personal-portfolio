
const Contact = () => {
    return (
        <div className='w-full border rounded-lg p-4'>
            <div>
            <h1 className="text-xl font-gumela font-bold  py-2">Contact Me</h1>
            </div>
            <form>
               <div className='flex flex-col my-1'>
               <label>Name <span className='text-rose-500'>*</span></label>
                <input className='input input-bordered' type="text" placeholder='Full Name'/>
               </div>
               <div className='flex flex-col my-1'>
               <label>Email <span className='text-rose-500'>*</span></label>
                <input className='input input-bordered' type="email" placeholder='Email'/>
               </div>
               <div className='flex flex-col my-1'>
               <label>Message <span className='text-rose-500'>*</span></label>
                <textarea className='textarea textarea-bordered' type="text" placeholder='Your message for me'/>
               </div>
               <div>
               <button className='btn btn-warning w-full my-2'>Send</button>
               </div>
            </form>
        </div>
    );
};

export default Contact;