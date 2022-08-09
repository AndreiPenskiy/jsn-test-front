import React, { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { FileInput, FileLabel } from "./AddHero.styled";
import Loader from "../Loader/Loader";
import { toast } from 'react-toastify';
import { useCreateSuperheroMutation } from "../../redux/superheroApiSlice";



export default function AddHero() {
  const [addSuperhero, { isLoading }] = useCreateSuperheroMutation();


  const [nickname, setNickname] = useState("");
  const [real_name, setRealName] = useState("");
  const [origin_description, setOriginDescription] = useState("");
  const [superpower, setSuperpowers] = useState("");
  const [catch_phrase, setCatchPhrase] = useState("");
  const [image, setImage] = useState("");

  const onChangeFile = e => {
    setImage(e.target.files[0]);
  }

  const changeOnClick = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("nickname", nickname);
    formData.append("real_name", real_name);
    formData.append("origin_description", origin_description);
    formData.append("superpower", superpower);
    formData.append("catch_phrase", catch_phrase);
    formData.append("image", image);

    setNickname("");
    setRealName("");
    setOriginDescription("");
    setSuperpowers("");
    setCatchPhrase("");
    setImage("");

    await addSuperhero(formData)
      .then((res) => console.log(res.data))
      .catch((err) => {
        console.log(err)
        toast.error("Something is wrong!")
      })
  };
  

  
  return (
  <>
      {isLoading && <Loader />}

    <Container maxWidth="xs">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5" sx={{fontfamily: 'Raleway', fontSize: '30px'}}>
          Add your Hero
        </Typography>
                <Box component="form" encType="multipart/form-data"
                    onSubmit={changeOnClick}
                    noValidate sx={{ mt: 1, mb: 7, }}>
          <TextField
            margin="normal"
            required
            fullWidth
            size="small"
            id="nickname"
            label="Nickname"
            name="nickname"
            autoComplete="nickname"
            value={nickname}
            onChange={e => setNickname(e.currentTarget.value)}
            autoFocus
            title="Superhero nickname"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            size="small"
            name="real_name"
            label="Real name"
            id="real_name"
            value={real_name}
            onChange={e => setRealName(e.currentTarget.value)}
            title="A real name of hero"
                    />
            <TextField
            margin="normal"
            required
            fullWidth
            size="small"
            name="origin_description"
            label="Origin description"
            id="origin_description"
            value={origin_description}
            onChange={e => setOriginDescription(e.currentTarget.value)}
            title="he was born Kal-El on the planet Krypton, before being rocketed to
Earth as an infant by his scientist father Jor-El, moments before Krypton's destruction…"
                    />
            <TextField
            margin="normal"
            required
            fullWidth
            size="small"
            name="superpower"
            label="Superpower"
            id="superpower"
            value={superpower}
            onChange={e => setSuperpowers(e.currentTarget.value)}
            title="solar energy absorption and healing factor, solar flare and heat vision..."
                    />
            <TextField
            margin="normal"
            required
            fullWidth
            size="small"
            name="catch_phrase"
            label="Catch phrase"
            id="catch_phrase"
            value={catch_phrase}
            onChange={e => setCatchPhrase(e.currentTarget.value)}
            title="“Look, up in the sky, it's a bird, it's a plane, it's Superman!”"
            sx={{ mb: 4, }}
            />

            
            <div>
              <FileLabel htmlFor="file">
                Choose hero image
                <FileInput type="file"
                  id="file"
                filename="image"
                onChange={onChangeFile}
                />
                </FileLabel>
            </div>
                    
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Add Hero
          </Button>
        </Box>
        </Box>
      </Container>
      </>
    );
};