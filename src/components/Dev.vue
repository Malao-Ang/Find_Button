<template>
<div id="dev">
	<link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
        integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
    />
    <table>
        <h2>Developer</h2>
        <tr>
            <td>
                <img
                    src="https://scontent.fbkk22-6.fna.fbcdn.net/v/t39.30808-6/279253602_1716037168739396_4993323625495401844_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHXa0XTgsXIn9-VShI0dnfizclg15SqtVjNyWDXlKq1WO44Tav7zEgt5Lh3lQ45ShRerl2dfUqCJkHLnulf7VL3&_nc_ohc=HdsUXBOUazEAX_yBcIm&tn=lUtRPMW3iEuORee0&_nc_ht=scontent.fbkk22-6.fna&oh=00_AT_2Wu0doQcagV1YpxVgM6BtlmOpKgwFWJWIUYsyT_sYOg&oe=62907514"
                />
            </td>
            <td>
                <h1>Kaewmanee Marsri</h1>
                <button class="link-icon">
                        <a
                            href="https://github.com/Malao-Ang"
                            target="_blank"
                        ><i class="fa-brands fa-github fa-lg" @click="aleart"></i></a>
                    
                </button>
                <button class="link-icon" >
                        <a
                            href="https://www.instagram.com/malao_2357/"
                            target="_blank">
                    <i class="fa-brands fa-instagram fa-lg" @click="aleart"></i>
					</a>
                </button>
                <button class="link-icon">
                        <a
                            href="https://www.youtube.com/channel/UCm03p8JqLg8tsljn0L4FfHg" target="_blank">
                    <i class="fa-brands fa-youtube fa-lg" @click="aleart"></i>
					</a>

                </button>
            </td>
        </tr>

        <h2>Game Designer</h2>
        <tr>
            <td>
                <img
                    src="data:image/jpeg;base64,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"
                />
            </td>
            <td>
                <h1>Kaewkanlaya Marasri</h1>
            </td>
        </tr>
        <tr>
            <td>
            <img
                    src="https://scontent.fbkk22-6.fna.fbcdn.net/v/t39.30808-6/279253602_1716037168739396_4993323625495401844_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHXa0XTgsXIn9-VShI0dnfizclg15SqtVjNyWDXlKq1WO44Tav7zEgt5Lh3lQ45ShRerl2dfUqCJkHLnulf7VL3&_nc_ohc=HdsUXBOUazEAX_yBcIm&tn=lUtRPMW3iEuORee0&_nc_ht=scontent.fbkk22-6.fna&oh=00_AT_2Wu0doQcagV1YpxVgM6BtlmOpKgwFWJWIUYsyT_sYOg&oe=62907514"
                />
            </td>
            <td>
                <h1>Kaewmanee Marsri</h1>
            </td>
        </tr>
    </table>
</div>
    
</template>

<script>
export default {
	methods:{
		aleart(){
			console.log('Click')
		}
	}
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Pacifico&display=swap");
h1{
    font-size: 1.5vw;
    margin-bottom:1.2vh;
}

h2 {
    font-family: "Pacifico", cursive;
    font-size: 3vw;
}
img {
    margin-top: 3vh;
    width: 15vw;
    border-radius: 100%;
    margin-left: 5vw;
    margin-right: 20px;
    object-fit: cover;
}
.link-icon {
    display: inline-block;
    margin-left: 10px;
}
</style>