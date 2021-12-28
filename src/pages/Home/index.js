import React, { useEffect, useState } from "react";
import { PageArea, SearchArea } from "./styled";
import useApi from "../../helpers/OlxAPI";
import { Link } from "react-router-dom";

import { PageContainer } from "../../components/MainComponents";
import AdItem from '../../components/partials/AdItem'

const Page = ()=>{
    const api = useApi()

    const [stateList, setStateList] = useState([])
    const [categories, setCategories] = useState([])
    const [adList, setAdList] = useState([])

    useEffect(()=>{
        const getStates = async ()=>{
            const slist = await api.getStates()
            setStateList(slist)
        }
        getStates()
    }, [])
    
    useEffect(()=>{
        const getCategories = async ()=>{
            const cat = await api.getCategories()
            setCategories(cat)
        }
        getCategories()
    }, [])

    useEffect(()=>{
        const getRecentAds = async ()=>{
            const json = await api.getAds({
                sort:'desc',
                limit:8

            })
            setAdList(json.ads)
        }
        getRecentAds()
    }, [])

    return(
        <>
            <SearchArea>
                <PageContainer>
                    <div className='searchBox'>
                        <form method='GET' action='/ads'>
                            <input type='text' name='q' placeholder='O que você procura?'/>
                            <select>
                                <option disabled selected='defaultvalue'>Estado</option>
                                {stateList.map((i, k)=>
                                    <option kay={k} value={i.name}>{i.name}</option>
                                )}
                            </select>
                            <button>Buscar</button>
                        </form>
                    </div>
                    <div className='categoryList'>
                        {categories.map((i, k)=>
                            <Link key={k} to={`/ads?cat=${i.slug}`} className='categoryItem'>
                                <img src={i.img} alt=''/>
                                <span>{i.name}</span>
                            </Link>
                        )}                                
                    </div>
                </PageContainer>
            </SearchArea>

            <PageContainer>
                <PageArea>
                    <h2>Anúncios Recentes</h2>
                    <div className='list'>
                        {adList.map((i, k)=>
                            <AdItem key={k} data={i}/>
                        )}
                    </div>
                    <Link to='/ads' className='seeAllLink'>Ver Todos</Link>
                    <hr/>
                    <p>
                        Lorem Ipsum é simplesmente texto fictício da indústria de impressão e digitação.
                         Lorem Ipsum tem sido o texto falso padrão da indústria desde 1500,
                          quando uma impressora desconhecida pegou uma galera do tipo e a embaralhou para fazer um livro de espécimes. Sobreviveu não só a cinco séculos,
                           mas também o salto para a digitação eletrônica, permanecendo essencialmente inalterado. 
                           Foi popularizado na década de 1960 com o lançamento de folhas do Letraset contendo passagens de Lorem Ipsum, 
                           e mais recentemente com softwares de publicação de desktop como Aldus PageMaker, incluindo versões de Lorem Ipsum.
                    </p>
                </PageArea>
            </PageContainer>
        </>
    )
}

export default Page