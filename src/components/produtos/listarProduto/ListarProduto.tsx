import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Box, Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import Produto from '../../../models/Produto';
import './ListarProduto.css';
import { useNavigate } from 'react-router-dom';
import { busca } from '../../../service/Service';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/userReducer';

function ListarProduto() {
    const [produtos, setProdutos] = useState<Produto[]>([])
    let navigate = useNavigate();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    useEffect(() => {
        if (token == '') {
            alert("Você precisa estar logado")
            navigate("/login")
        }
    }, [token])


    async function getProduto() {
        await busca("/produtos/all", setProdutos, {
            headers: {
                'Authorization': token
            }
        })
    }


    useEffect(() => {
        getProduto()
    }, [produtos.length])

    return (
        <>
            {
                produtos.map(produto => (
                    <Box m={2} >
                        <Card variant="outlined">
                            <CardContent>
                                <Typography color="textSecondary" gutterBottom>
                                    Produto
                                </Typography>
                                <Typography variant="h5" component="h2">
                                    {produto.nome}
                                </Typography>
                                <Typography variant="h5" component="h2">
                                    {produto.descricao}
                                </Typography>
                                <Typography variant="h5" component="h2">
                                    {produto.preco}
                                </Typography>
                                <Typography variant="h5" component="h2">
                                    {produto.tipo}
                                </Typography>
                                <Typography variant="h5" component="h2">
                                    {produto.classInd}
                                </Typography>
                                <Typography variant="h5" component="h2">
                                    {produto.console}
                                </Typography>
                                <Typography variant="h5" component="h2">
                                    {produto.foto}
                                </Typography>
                                <Typography variant="body2" component="p">
                                    {produto.categoria?.genero}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Box display="flex" justifyContent="center" mb={1.5} >

                                    <Link to={`/formularioProduto/${produto.id}`} className="text-decorator-none">
                                        <Box mx={1}>
                                            <Button variant="contained" className="marginLeft" size='small' color="primary" >
                                                Atualizar
                                            </Button>
                                        </Box>
                                    </Link>
                                    <Link to={`/deletarProduto/${produto.id}`} className="text-decorator-none">
                                        <Box mx={1}>
                                            <Button variant="contained" size='small' color="secondary">
                                                Deletar
                                            </Button>
                                        </Box>
                                    </Link>
                                </Box>
                            </CardActions>
                        </Card>
                    </Box>
                ))
            }
        </>
    );
}


export default ListarProduto;