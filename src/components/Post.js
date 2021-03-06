import React from "react";
import { Card, CardImg, CardHeader, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

const Post = ({ author, body, title, id }) => (
  <Card className="mb-4" id={id}>
    {/* <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" /> */}
    <CardHeader>
      <h5>{title}</h5>
    </CardHeader>
    <CardBody>
      <CardSubtitle>{author}</CardSubtitle>
      <CardText>{body}</CardText>
      <Button>Button</Button>
    </CardBody>
  </Card>
);
export default Post;
