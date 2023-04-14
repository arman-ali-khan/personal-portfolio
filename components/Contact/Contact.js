import React from 'react';

const Contact = () => {
    return (
        <div>
            <form>
               <div>
               <label>Name</label>
                <input type="text" />
               </div>
               <div>
               <label>Email</label>
                <input type="text" />
               </div>
               <div>
               <label>Message</label>
                <input type="text" />
               </div>
               <div>
               <button>Send</button>
               </div>
            </form>
        </div>
    );
};

export default Contact;