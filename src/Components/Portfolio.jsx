import animal from '../assets/animal.png'
import chefs from '../assets/chefs.png'
import tune from '../assets/tune.png'

const Portfolio = () => {
    return (
        <div className='mx-6 mt-12 grid grid-cols-3 gap-5 h-64'>
            <div className='group relative'>
                <img className='h-full rounded-md' src={animal} alt="" />
                <div className='hidden group-hover:block absolute top-0 h-full left-0 w-full bg-black opacity-70'>
                    <div className='flex items-center justify-center py-24'>
                        <button className="main-button mr-3" onClick={() => window.my_modal_3.showModal()}>View</button>
                        <a href="https://animal-toys-market.web.app/" target='_blank'><button className='main-button'>Live Site</button></a>
                    </div>
                    <dialog id="my_modal_3" className="modal">
                        <form method="dialog" className="modal-box">
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            <img className='rounded-md' src={animal} alt="" />
                            <p className="py-4 text-2xl font-bold">Toy Emporium</p>
                            <p className='text-justify'>This website is designed for young children. You can buy Animal toys through this website. First you have to create a user and then you can see the toys, otherwise you will not be able to see it. Here the user can add his products and can update and delete them if he wants. In all toys page user can all toys added by our user.</p>
                            <h1 className='text-xl font-bold my-2'>Github Source</h1>
                            <div className='flex items-center gap-3'>
                                <a href="https://github.com/Mirhasankhan/animal-toy-client" target='_blank'> <h1 className='main-button'>Client Side</h1></a>
                                <a href="https://github.com/Mirhasankhan/animal-toy-server" target='_blank'> <h1 className='main-button'>Server Side</h1></a>
                            </div>
                        </form>
                    </dialog>
                </div>
            </div>
            <div className='group relative'>
                <img className='h-full rounded-md' src={chefs} alt="" />
                <div className='hidden group-hover:block absolute top-0 h-full left-0 w-full bg-black opacity-70'>
                    <div className='flex items-center justify-center py-24'>
                        <button className="main-button mr-3" onClick={() => window.my_modal_4.showModal()}>View</button>
                        <dialog id="my_modal_4" className="modal">
                            <form method="dialog" className="modal-box">
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                <img className='rounded-md' src={chefs} alt="" />
                                <p className="py-4 text-2xl font-bold">Super Chefs</p>
                                <p className='text-justify'>Super chefs is cooking related website. After login user can see some of best Chefs from Bangladesh. But if they want to watch chefs with detail they have to login first. In the details page user can see chefs best recipies and if want user can add them as favourites.</p>
                                <h1 className='text-xl font-bold my-2'>Github Source</h1>
                                <div className='flex items-center gap-3'>
                                    <a href="https://github.com/Mirhasankhan/super-chefs-client" target='_blank'> <h1 className='main-button'>Client Side</h1></a>
                                    <a href="https://github.com/Mirhasankhan/super-chefs-server" target='_blank'> <h1 className='main-button'>Server Side</h1></a>
                                </div>
                            </form>
                        </dialog>
                        <a href="https://super-chefs-bd.web.app/" target='_blank'><button className='main-button'>Live Site</button></a>
                    </div>
                </div>
            </div>
            <div className='group relative'>
                <img className='h-full rounded-md' src={tune} alt="" />
                <div className='hidden group-hover:block absolute top-0 h-full left-0 w-full bg-black opacity-70'>
                    <div className='flex items-center justify-center py-24'>
                    <button className="main-button mr-3" onClick={() => window.my_modal_5.showModal()}>View</button>
                        <dialog id="my_modal_5" className="modal">
                            <form method="dialog" className="modal-box">
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                <img className='rounded-md' src={tune} alt="" />
                                <p className="py-4 text-2xl font-bold">TuneTutor</p>
                                <p className='text-justify'>TuneTutor is a music instruments learning website. User can watch classes and instructors of our sites. If they want to book any class they have to login first. After login they can book classes if the admin give the user instructor role than user can add his own class.</p>
                                <h1 className='text-xl font-bold my-2'>Github Source</h1>
                                <div className='flex items-center gap-3'>
                                    <a href="https://github.com/Mirhasankhan/music-instrument-learning-client" target='_blank'> <h1 className='main-button'>Client Side</h1></a>
                                    <a href="https://github.com/Mirhasankhan/music-instrument-learning-server" target='_blank'> <h1 className='main-button'>Server Side</h1></a>
                                </div>
                            </form>
                        </dialog>
                        <a href="https://learn-music-instruments.web.app/" target='_blank'><button className='main-button'>Live Site</button></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;