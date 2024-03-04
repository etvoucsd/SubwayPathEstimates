export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","assets/demo/fonts/atkinson.css","assets/demo/fonts/atlas.css","assets/demo/fonts/baloo-bhai.css","assets/demo/fonts/canela.css","assets/demo/fonts/computer-modern.css","assets/demo/fonts/cozette.css","assets/demo/fonts/inter.css","assets/demo/fonts/jamboree.css","assets/demo/fonts/jersey.css","assets/demo/fonts/lyon.css","assets/demo/fonts/metropolis.css","assets/demo/fonts/national.css","assets/demo/fonts/publico.css","assets/demo/fonts/recoleta.css","assets/demo/fonts/rubik.css","assets/demo/fonts/spacemono.css","assets/demo/fonts/tiempos.css","assets/demo/test.jpg","favicon.ico","favicon.png"]),
	mimeTypes: {".css":"text/css",".jpg":"image/jpeg",".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.7puLAHoS.js","app":"_app/immutable/entry/app.BumV2z6W.js","imports":["_app/immutable/entry/start.7puLAHoS.js","_app/immutable/chunks/entry.6bBHGN38.js","_app/immutable/chunks/scheduler.xq3EVD-W.js","_app/immutable/chunks/index.zq34YaR7.js","_app/immutable/entry/app.BumV2z6W.js","_app/immutable/chunks/scheduler.xq3EVD-W.js","_app/immutable/chunks/index.IIg3NcjF.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
