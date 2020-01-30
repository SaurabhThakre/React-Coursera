import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle
} from 'reactstrap';
// CardImgOverlay


class DishDetail extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedDish: null,
        }
    }

    onDishSelect(dish) {
        this.setState({ selectedDish: dish });
    }

    renderDish(dish) {
        if (dish != null)
            return (
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return (
                <div></div>
            );
    }


    renderComments(comments) {
        if (comments != null) {
            const comm = comments.map((comment) => {
                return (
                    <div key={comment.id}>
                        <p>{comment.comment}</p>
                        <p>-- {comment.author},
                        &nbsp;
                    {new Intl.DateTimeFormat('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: '2-digit'
                        }).format(new Date(comment.date))}
                        </p>
                    </div>
                );
            });

            return (
                <div className="col-12 col-md-5 m-1">
                    <h4> Comments </h4>
                    <div className='commentStyle'>
                        {comm}
                    </div>
                </div>
            );
        }
        else {
            return (<div></div>)
        }
    }


    render() {
        const dish = this.props.dish;

        if (dish == null) {
            return (<div></div>)
        }

        const dishItem = this.renderDish(dish);
        const commentItem = this.renderComments(dish.comments);
        return (
            <div>
                <div className="commentSection">
                    {dishItem}
                </div>
                <div className="commentBox">
                    {commentItem}
                </div>
            </div>
        );
    }



}

export default DishDetail;