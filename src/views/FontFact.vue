<template>

    <body>
        <div class="text-container">
            <div class="title">
                <span id="head">&#10024; MAKE BEST FRIENDS &#10024;</span>
            </div>
            <div class="fact-container">
                <span id="fact">{{text}}</span>
            </div>

            <button id="random" @click="random()">Random</button>
        </div>
    </body>
</template>
<script>
export default {
    data() {
        return {
             quation:[

            "ชอบฟังเพลงอะไรตอนนี้"
            ,

            "หนังเรื่องโปรด"
            ,
            "การ์ตูนเรื่องโปรด"
            ,
            "จุดเด่นของตัวเอง"
            ,

            "นิสัยแย่ๆที่อยากเปลี่ยน"
            ,

            "ชอบกินอะไร"
            ,

            "ของหวานที่ชอบที่สุด"
            ,

            "เครื่องดื่มที่ชอบที่สุด"
            ,

            "เจอกันครั้งแรกที่ไหน"
            ,

            "ช่องยูทูปที่กดเปซับเป็นช่องแรก"
            ,

            "เจอผีครั้งแรก"
            ,

            "โทรศัพเรื่องแรกคือรุ่นอะไร"
            ,

            "การ์ตูนที่ดูเรื่องแรก"
            ,

            "เสป็คในฝันคือ"
            ,

            "ไอดอลที่เอาเป็นแบบอย่าง"
            ,

            "ไอดอลที่ชอบ"
            ,

            "อาหารที่ชอบ"
            ,

            "หนังที่ดูล่าสุด"
            ,

            "งานอดิเรกที่ชอบ"
            ,

            "วิชาที่ชอบที่สุด"
            ,

            "เคยมีเรื่องอะไรกับอาจารย์"
            ,

            "สถานะตอนนี้"
            ,

            "ดอกไม้ที่ชอบ"
            ,

            "สัตว์ที่ชอบ"
            ,

            "สัตว์ที่อยากเป็น"
            ,

            "ถ้ามีพลังวิเศษอยากมีพลังอะไร"
            ,

            "เคยดูบาร์บี้มั้ยแล้วชอบภาคไหนมากที่สุด"
            ,

            "อยากบอกอะไรกับตัวเองตอนเด็ก"
            ,

            "เลือกรีวิวเพื่อนมา 1 คน"
            ,

            "ยี่ห้อน้ำที่ชอบดื่ม"
            ,

            "ใช้น้ำหอมแบบไหน"
            ,

            "แนะนำซีรีย์ที่ชอบ"
            ,

            "สถานที่ที่อยากไปในไทย"
            ,

            "ประเทศที่อยากไปและอยากไปทำอะไร"
            ,

            "เจอกันครั้งแรกเป็นยังไง"
            ,

            "เครื่องประดับที่ชอบใส่"
            ,

            "สถานที่ที่ไปบ่อยที่สุด"
            ,

            "เล่าเรื่องตลกหรือน่าอายในวัยเด็ก1เรื่อง"
            ,

            "กลางวันหรือกลางคืน"
            ,

            "เสป็กที่อยากได้"
            ,

            "ถ้าถูกหวยอยากทำอะไรอย่างแรก"
            ,

            "ไม่ชอบคนแบบไหน"
            ,

            "ถ้าต้องเป็นแฟนกับคนในกลุ่ม1คนจะเป็นแฟนกับใคร"
            ,

            "สัตว์เลี้ยงตัวแรก"
            ,

            "แฟนคนแรก"
            ,

            "เกมที่อนนไลน์ที่เล่นเกมแรก"
            ,

            "เคยโดดเรียนมั้ย?"
            ,

            "ครูที่ไม่มีวันลืม"
            ,

            "เข้าห้องปกครองเพราะอะไร"
            ,

            "เดินทางไปโรงเรียนอย่างไร"
            ,

            "กินเหล้าครั้งแรกเมื่อไหร่"
            ,

            "สูบบุหรี่ครั้งแรกเมื่อไหร่"
            ,

            "เคยขโมยของไหม"
            ,

            "ครูประจำชั้นที่จำได้"
            ,

            "อักษรย่อของคนที่แอบชอบ"
            ,

            "เป้าหมายในชีวิตตอนนี้"
            ,

            "ชอบสีอะไร"
            ,

            "มีคนคุยหรือยัง"
            ,

            "ชอบนั่งตรงไหนของรถ"
            ,
            "เพื่อนสนิทของคุณคือ"
            ,
            "3 สิ่งที่ทำให้คุณอารมณ์เสีย"
            ,
            "3 สิ่งที่ทำให้คุณอารมณ์ดี"
            ,
            "อยากสักไหมแล้วอยากสักรูปอะไรตรงไหน"
            ,
            "Happy endings or Bad endings"
            ,
            "ชอบหนังแนวไหน"
            ,
            "ทำอะหารได้มั้ย"
            ,
            "เมนูอะไรที่คิดว่าตัวเองทำแล้วอร่อยที่สุด"
            
            ,
            "รายการทีวีที่ชอบ"
            ,
            "พูดได้กี่ภาษา"
            ,
            "เกิดที่ไหน"
            ,
            "ผลงานศิลปะที่ชอบ"
            ,
            "ตัวร้ายที่ชอบ"
            ,
            "ฮีโร่ที่ชอบ"
            ,
            "ตัวละครในอนิเมะที่ชอบ"
            ,
            "ร้านอาหารที่ชอบ"
            ,
            "ร้านอาหารฟาสฟู้ดที่ชอบ"
            ,
            "ฉายาของคุณ"
            ,
            "พฤติกรรมของคุณเองที่คิดว่าแปลก"
            ,
            "งานอดิเรกลับๆของคุณ"
            ,
            "คุณกำลังติดตามใครในIGเป็นพิเศษ"
            ,
            "1-10 คุณติดโซเชียลมากแค่ไหน"
            ,
            "1-10 ความมั่นใจของคุณ"
        ],
        text:'กดเพื่อสุ่มคำถามให้รู้จักเพื่อนของคุณมากยิ่งขึ้น'

        }
    },
    methods:{
        random(){
            var num = Math.floor(Math.random()*this.quation.length);
            // console.log(num);
            // console.log(this.quation[num]);
            return  this.text = this.quation[num];
        }
    }

}

</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Kanit&display=swap');

body {
    font-family: 'Kanit', sans-serif;
    color: black;
    font-weight: 700;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    min-height: 100vh;
    background-image: linear-gradient(to right, #fa709a 0%, #fee140 100%);


}

.text-container {
    width: auto;
    max-width: 900px;
    padding: 20px 30px;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.8);
    box-shadow: 0 10px 10px 10px rgba(0, 0, 0, 0.2);
    margin-left:10px;
    margin-right:10px;
}

.title {
    font-size: 2.75rem;
}

.fact-container {
    font-size: 2.3rem;
    border: 2px solid gray;
    border-radius: 20px;
    padding: 10px;
}

#random {
    border: none;
    background-image: linear-gradient(60deg, #96deda 0%, #50c9c3 100%);
    border-radius: 50px;
    font-size: 1.2rem;
    color: aliceblue;
    box-shadow: 5px 2px 5px rgba(0, 0, 0, 0.5);
    margin-top: 20px;
    padding: 10px;
    text-shadow: 2px 2px 5px #6f6f6f;
}

@media screen and (max-width:1000px) {
    .text-containerr {
        margin: auto 10px;
    }
}
</style>
