

const talk = document.querySelector('.talk');
        const content = document.querySelector('.content');

     
        const YouTube = [
            'opening youtube sir'
     ];
     const snack = [
            'opening snack sir'
     ];

     const who = [
            'you are mani your are my bose!'
     ];

     const whojh = [
            'i am your jarvis'
     ];


     const Mother = [
            'Your mother name is Bindu Devi and your mother is my mother'
     ];
     const Father = [
            'Your father name is rajesh and your father is my father'
     ];

     const Deaf=[
         'no i am not stupid but some time i can not able to hear you'
     ];

     const tra=[
         'ya Sure but please take a permission from my boss'
     ]


     const am=[
         'Your name is mani and you are my bose']

         const trash=['ok boss trash khulraha h']

         const jarvis=["hello boss welcome to mani industries"];
         const freind=["Anmol kamran vikash sachin aditya"]
        const saadi=[12 ,"12 august 2021"];
         const love=["sneha she is very beautiful"]
         const play=["ok sir i am searching for you"]

        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        const recognition =  new SpeechRecognition();

        recognition.onstart = function(){
            console.log('How Can I Help You ?')
            //window.speechSynthesis.speak(speech);
        }
        recognition.onresult = function (event) {
            const current = event.resultIndex;

            const transcript = event.results[current][0].transcript;
           
            readOutLoud(transcript);

        };

       talk.addEventListener('click', () =>{
            recognition.start();
        });


        function readOutLoud(message){
            const speech = new SpeechSynthesisUtterance();

            speech.text = 'I am not able to understand ,sir';


            if(message.includes('YouTube')){
                const finalText = 
                    YouTube[Math.floor(Math.random()*YouTube.length)];
                speech.text = finalText; 
                window.open('https://www.youtube.com/')
                }

                if(message.includes("snack")){
                    const finalText=snack[Math.floor(Math.random()*snack.length)];
                    speech.text=finalText;
                    window.open("https://snack.expo.dev/")
                }
                if(message.includes("who are you")){
                    const finalText=whojh[Math.floor(Math.random()*whojh.length)];

                    speech.text=finalText;
                }


                if(message.includes("who am I")){
                    const finalText=who[Math.floor(Math.random()*who.length)];

                    speech.text=finalText;
                }

                if(message.includes("what is my mother name")){
                    const finalText=Mother[Math.floor(Math.random()*Mother.length)];
                    speech.text=finalText;
                }

                if(message.includes("what is my father name")){
                    const finalText=Father[Math.floor(Math.random()*Mother.length)];
                    speech.text=finalText;
                }

                if(message.includes("are you stupid")){
                    const finalText=Deaf[Math.floor(Math.random()*Deaf.length)];
                    speech.text=finalText;
                }
 


                if(message.includes("can I change your name")){
                    const finalText=tra[Math.floor(Math.random()*tra.length)];
                    speech.text=finalText;
                }

                if(message.includes("hello Jarvis")){
                    const finalText=jarvis[Math.floor(Math.random()*jarvis.length)];
                    speech.text=finalText;
                }


                if(message.includes("who is my best friend")){
                    const finalText=freind[Math.floor(Math.random()*freind.length)];
                    speech.text=finalText;
                }

                if(message.includes("when was I married")){
                    const finalText=saadi[Math.floor(Math.random()*saadi.length)];
                    speech.text=finalText;
                }

                if(message.includes("whos is my love")){
                    const finalText=love[Math.floor(Math.random()*love.length)];
                    speech.text=finalText;
                }

                if(message.includes("play something new music")){
                    const finalText=play[Math.floor(Math.random()*play.length)];
                    speech.text=finalText;
                    window.open("https://www.youtube.com/watch?v=SrMLFxMlflA&list=RDSrMLFxMlflA&start_radio=1")
                }


               


               
               
               

            speech.volume = 6;
            speech.rate = 1.1;
            speech.pitch = 1;

            window.speechSynthesis.speak(speech);
        }
  