const router = express.Router();
const { data } = require('../data.json');

const app = express();

app.set('view engine', 'pug');
app.use('/static', express.static('public'));

router.get('/', (req, res) => {
	res.render('index');
});

router.get('/about', (req, res) => {
	res.render('about');
});

router.get('/project', (req, res) => {
	res.render('project');
});