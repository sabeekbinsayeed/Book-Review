import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h1 className='text-center'>Blogs</h1>
            <h3>What is Context API?</h3>
            <p className='w-75'>Answer:
                <br></br>
                Context API solves one of the major problem of react which is prop driling. Prop driling sends data from one component to another component in multiple layers. So context API produces global variables that can be passed around. Context API allows you to have a central store where your data is kept. Here we need to initiliaze the context , then create the provider and then the consumer.
            </p>

            <h3>Semantic Tag</h3>
            <p>Semantic tags help us to understand the code better. Elements such as header, footer, article describes the purpose of why they are being used . Some of the semantic tags are <bold>header, footer, article, section, main, nav , summary. </bold> </p>. Semantic tags are easier to read and it provides better accessibility.
        </div>
    );
};

export default Blogs;