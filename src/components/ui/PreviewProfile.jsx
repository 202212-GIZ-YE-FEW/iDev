function PreviewProfile() {
    return (
        <div className='container relative :w-full h-full  my-5 flex justify-center'>
            <div
                className='absolute bg-cover w-80 h-80 bg-center'
                style={{ backgroundImage: "url(/profile-icon.png)" }}
            >
                <div className='absolute w-20 h-20 bottom-1 top-64 left-32 bg-white border-2 border-black rounded-full'>
                    <div
                        className='absolute left-3 top-2 bg-center bg-cover w-14 h-14'
                        style={{
                            backgroundImage: "url(/edit_profile_icon.png)",
                        }}
                    ></div>
                </div>
            </div>
        </div>
    );
}

export default PreviewProfile;
