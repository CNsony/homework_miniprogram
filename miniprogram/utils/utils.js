module.exports = { //utils
	/**
	 * 
	 * @param {Object} targetObj 
	 * @return {Array}
	 */
	transObjToArray:(targetObj)=>{
		const res = []
		for(let i in targetObj){
			res.push({
				mark:i,
				val:targetObj[i]
			})
		}
		return res
	}
}