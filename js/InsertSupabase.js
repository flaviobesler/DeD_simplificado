import { supabase } from "./supabaseClient";

document.addEventListener("DOMContentLoaded",() =>{

        let raca = null;
        let classe = null;
        let genero = null

        const SelectRaca = document.querySelectorAll('.raca button');
        const SelectClasse = document.querySelectorAll('.classe button');

        const male = document.getElementById('male');
        const female = document.getElementById('female');

        male.addEventListener('click', ()=>{
                genero = 'homem';
        })
        female.addEventListener('click', ()=>{
                genero = 'mulher';
        })


        SelectRaca.forEach(item =>{
                item.addEventListener('click', ()=>{
                        raca = item.dataset.raca;
                })
        })
        
        SelectClasse.forEach(item =>{
                item.addEventListener('click', ()=>{
                        classe = item.dataset.classe
                })
        })

        const criar = document.getElementById('criar');
        criar.addEventListener('click', async()=>{

                const {data, error} = await supabase
                .from('jogadores')
                .insert({
                        genero: genero,
                        classe:classe,
                        raca:raca
                })

                if(error){
                        alert("erro ao registrar")
                }
                else{window.location.href = '/personagem.html'}

        })







})