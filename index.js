module.exports = function GhillieTeleporter(dispatch) {
    
    //Player's CID
    let CID = null;
    //Coordinates when entering SA
    let coordX = 44908;
    let coordY = -43506;
    let coordZ = 2057;
    
    //Hooking player's CID
    dispatch.hook('S_LOGIN', 1, event => {
            CID = event.cid;
    })
    
    //Hooking player's coordinates
	dispatch.hook('cChat', 1 , (event) => {
		if(event.message.includes('!sa')){
			dispatch.hookOnce('S_SPAWN_ME', 1, event => {
				//Checking if coordinates are the GG entrance ones
				if(coordX == event.x && coordY == event.y && coordZ == event.z)
				{
					ggTele();
					return false;
				}
			})
			return false;
		}
	});
    
    //Function to tele in front of the GG boss
    function ggTele() {
        dispatch.toClient('S_SPAWN_ME', 1, {
        target: CID,
        x: 54032.68359375,
        y: -70963.2109375,
        z: 5159.8798828125,
        alive: 1,
        unk: 0 
        })
    }
}