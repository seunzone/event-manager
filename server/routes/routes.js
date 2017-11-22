import Event from '../controllers/controllerEvent';


const routes = (app) => {
  app.get('/', (req, res) => {
    res.status(200)
      .send('Welcome to the event-manager api');
  });
  app.post('/api/v1/event', Event.addEvent);// Post Events
};

export default routes;
