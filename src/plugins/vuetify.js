import Vue from 'vue';
import 	Vuetify, {
	VApp,
	VSelect,
	VAlert,
	VCard
} from 'vuetify/lib';
// import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify, {
	components: {
		VApp,
		VSelect,
		VAlert,
		VCard
	}
});
const opts= {
		customVariables: ['~/assets/variables.scss'],
		treeShake: true,
		theme: {
			primary: '#39b4e7', // Nomadic blue
			secondary: '#ff6635', // Nomadic red/orange
			error: '#ff6635',
			success: '#39b4e7',
		}
}
export default new Vuetify({opts});



