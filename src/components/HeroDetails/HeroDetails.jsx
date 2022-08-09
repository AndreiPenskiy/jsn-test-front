import { useFetchSuperheroByIdQuery, useDeleteSuperheroMutation } from '../../redux/superheroApiSlice';
import {
  useParams,
  useNavigate,
  useLocation,
  NavLink,
} from "react-router-dom";
import { Container, Image, ButtonBack, TextDescription, NicknameTitle, RealNameTitle, Text, ButtonContainer, FlexContainer, SecondaryButton } from './HeroDetails.styled';

export default function HeroDetails() {
    const { id } = useParams();
    const { data, isSuccess } = useFetchSuperheroByIdQuery(id);
    const [deleteSuperhero, { isLoading: isDeleting }] = useDeleteSuperheroMutation();

    const location = useLocation();
    const navigation = useNavigate();

    const onClickBack = () => {
    const { from } = location.state;
    navigation(from);
  };
    
    


    return (
        <>
            {isSuccess && (
                <>
                    
                    <Container>
                        <Image
                            src={`http://localhost:3001/static/${data.image}`}
                            alt={data.nickname} />
                        
                        <FlexContainer>
                            <TextDescription>
                                <ButtonBack type='button' onClick={onClickBack}>
                                    <NavLink to="/" style={{ textDecoration: 'none' }}>
                                        Back to list
                                    </NavLink>
                                </ButtonBack>
                                <NicknameTitle>Nickname: {data.nickname}</NicknameTitle>
                                <RealNameTitle>Real name: {data.real_name}</RealNameTitle>
                                <Text>Description: {data.origin_description}</Text>
                                <Text>Superpowers: {data.superpower}</Text>
                                <Text>Catch phrase: {data.catch_phrase}</Text>
                            </TextDescription>
                        
                            <ButtonContainer>
                                <SecondaryButton
                                    type='button'
                                    title={isDeleting ? "Deleting..." : "Delete"}
                                    onClick={(e) => {
                                        deleteSuperhero(data._id);
                                        onClickBack();
                                    }}
                                    disabled={isDeleting}
                                >
                                    Delete
                                </SecondaryButton>
                                
                                <SecondaryButton>
                                    <NavLink to="update/" state={{ from: location }} style={{ textDecoration: 'none' }}>
                                        Edit
                                    </NavLink>
                                </SecondaryButton>
                            </ButtonContainer>
                        </FlexContainer>
                    </Container>
                </>
            )}
        </>
    )
}