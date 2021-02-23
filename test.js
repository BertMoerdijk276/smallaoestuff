// 3 = RM 1x1
// 4 = RM TG


const id = 3
const limit = 2000

let data_objs = [{ id: '76561198169336974', name: 'CL.D3rp' },
{id: '76561197981262667', name: 'CL.Darknoob' },
{id: '76561198367209710', name: 'CL.Dracken'},
{id: '76561198008316811', name: 'CL.Collins'},
{id: '76561198013793264', name: 'CL.JonSlow'},
{id: '76561197984704438', name: 'CL.Buddy'}]

async function get_data() { 

    let promises = data_objs.map(obj => axios.get(`https://aoe2.net/api/player/ratinghistory?game=aoe2de&leaderboard_id=3&steam_id=${obj.id}&count=1`).then(res => obj.rating = res.data[0].rating ))
    await Promise.all(promises)

	document.getElementsByClassName("view").destroy()

    data_objs = data_objs.sort(function (a, b) {
        return parseInt(b.rating) - parseInt(a.rating)
    });

    data_objs.map(x => x.string = `${x.name}: ${x.rating}`)
    document.getElementById('player_data_div').innerHTML  = data_objs.map(x => x.string).join(',')

}
//

get_data()