export const middlewares = {
	send404(req, res) {
		res.status(404).render("404")
	},
}
