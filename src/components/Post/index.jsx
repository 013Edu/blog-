import React from 'react';

import {
    Container,
    HeaderPost,
    ContentBody,
    Button,
    TextButton,
    TextContainer,
    Text,
    FooterPost,
    Content,
    ButtonCreatePost,
    ContentImage,
    ContentIcons

} from './styles';

import { FaPen, FaPlusCircle, FaTrash } from 'react-icons/fa';


function Post({ name, body, id, onDelete, image, onEdit }) {

    return (
        <Container>
            <Content>
                <HeaderPost>
                    <ButtonCreatePost>
                        <FaPlusCircle size={25} color="#878787" />
                    </ButtonCreatePost>
                </HeaderPost>

                <ContentBody>
                    <Button onClick={onEdit}>
                        <TextButton>Sharing</TextButton>
                    </Button>
                    <ContentImage src={image} />
                    <TextContainer>
                        <Text>
                            {name}
                        </Text>
                    </TextContainer>
                    <TextContainer>
                        <Text>
                            {body}
                        </Text>
                    </TextContainer>
                </ContentBody>

                <FooterPost>
                    <ContentIcons>
                        <FaPen size={20} color="#878787" />
                    </ContentIcons>
                    <ContentIcons>
                        <FaTrash size={20} color="#878787" />
                    </ContentIcons>
                </FooterPost>
            </Content>
        </Container>
    )
}

export default Post;