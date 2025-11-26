<section className='projects-section'>
        <div className='title-container prj'>
            {tagIcons.openTag}
            <h2 className='prj-title'>Projects</h2>
            {tagIcons.closeTag}
        </div>
            <div className='slides-container'>
                {
                    slides.map((slide, index)=>{
                        let position = "";
                        if(index === active){
                            position = "active";
                        } else if (index === active + 1 || index === 0 && active === slides.length - 1 ){
                            position= "next";
                        } else if (index === active + 2  
                            || index === 1 && active === slides.length - 1
                            || index === 3 && active === slides.length - 2
                        ){
                            position = "last";
                        } else {
                            position = "prev"
                        }
                        

                        return <Slide key={slide.id} {...slide} classes={position}/>
                    })
                }
        <aside className='btn-container'>
            <button className='btn-prev' type='button'  onClick={()=>setActive(active - 1)}>
                {arrows.prev}
            </button>
            <button className='btn-next' onClick={nextSlide}>
                {arrows.next}
            </button>
        </aside>

            </div>