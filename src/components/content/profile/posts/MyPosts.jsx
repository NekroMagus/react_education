import React from 'react';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from '../../../../utils/validator/validator';
import Element from "../../../common/fomsControll/FormsControl";

const maxLength = maxLengthCreator(10);

const MyPosts = (props) => {

    const allPostElements = props.posts.map(x => <li key={x.id}>{x.text}</li>);

    const addNewPost = (formData) => {
        props.addNewPost(formData.newPost);
    };

    return (
        <div>
            {allPostElements}
            <FormPostsRedux onSubmit={addNewPost}/>
        </div>
    );
};


const Textarea = Element('textarea');

const FormPosts = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea}
                   name={"newPost"}
                   placeholder={"add new post"}
                   validate={[requiredField, maxLength]}/>
            <button>Опубликовать</button>
        </form>
    )
};

const FormPostsRedux = reduxForm({form: "newPostMessage"})(FormPosts);

export default MyPosts;