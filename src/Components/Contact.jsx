import call from '../assets/call.json'
import Lottie from "lottie-react";

const Contact = () => {
    const handleMessageSend = (e)=>{
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const message = form.message.value
        console.log(name, email, message);
    }
    return (
        <div className="grid grid-cols-2">
             <Lottie animationData={call} loop={true} />
            <form onSubmit={handleMessageSend} className="card-body bg-gray-600 mx-16 rounded-md mt-16">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-white font-semibold text-xl">Email</span>
                    </label>
                    <input type="text" name="name" placeholder="Name" className="input input-bordered text-black" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-white font-semibold text-xl">Password</span>
                    </label>
                    <input type="email" name="email" placeholder="Email" className="input input-bordered text-black" />                    
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-white font-semibold text-xl">Message</span>
                    </label>
                    <textarea className="p-3 rounded-lg text-black" placeholder="Enter Your Message" name="message" cols="30" rows="5"></textarea>
                </div>
                <div className="form-control mt-6">
                    <input className="main-button" type="submit" value="Send" />
                </div>
            </form>
           
        </div>
    );
};

export default Contact;