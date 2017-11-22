import Event from '../controllers/controllerEvent';
import Validator from '../middleware/validator';


const routes = (app) => {
  app.get('/', (req, res) => {
    res.status(200)
      .send('Welcome to the event-manager api');
  });
  app.post('/api/v1/event', Validator.addEventValidator, Event.addEvent);// Post Events
  app.put('/api/v1/event/:id', Event.editEvent); // Modifies event
  app.delete('/api/v1/event/:id', Event.deleteEvent); // Modifies event
};

export default routes;