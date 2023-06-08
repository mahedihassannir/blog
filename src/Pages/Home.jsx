import Post from "../Components/Post";



const Home = () => {

    const handlePost = (e) => {

        e.preventDefault()

        const from = e.target

        const title = from.title.value
        const des = from.des.value

        console.log(title, des);




    }

    return (
        <div>

            {/* here is teh post input section */}

            <div className="grid ">
                {/* Open the modal using ID.showModal() method */}
                <button className="btn" onClick={() => window.my_modal_1.showModal()}>open modal</button>
                <dialog id="my_modal_1" className="w-1/2 bg-transparent">
                    <form onSubmit={handlePost} method="dialog" className="modal-box">

                        <input type="text" placeholder="title" name="title" className="input input-bordered input-accent w-full max-w-xs" />
                        <textarea placeholder="write your description" name="des" className=" pt-2 pl-2 border-2 mt-3" id="" cols="60" rows="10"></textarea>
                        <button type="submit" className="btn bg-primary">post</button>
                        <div className="modal-action">
                            {/* if there is a button in form, it will close the modal */}

                            <button className="btn">Close</button>
                        </div>

                    </form>
                </dialog>
            </div>


            {/* here is the main content sestion */}


            <section>
                <Post>
                    
                </Post>
            </section>


            {/* here is the main content sestion ends */}

        </div>
    );
};

export default Home;