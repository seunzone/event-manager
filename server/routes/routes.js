// Import controllers 
import Event from '../controllers/controllerEvent';
import Center from '../controllers/controllerCenters';
// Import Validator
import Validator from '../middleware/validator';


const routes = (app) => {
  app.get('/', (req, res) => {
    res.status(200)
      .send('Welcome to the event-manager api');
  });
  app.post('/api/v1/event', Validator.addEventValidator, Event.addEvent);// Post Events
  app.get('/api/v1/event', Event.getAllEvents);// Get Events
  app.put('/api/v1/event/:id', Event.editEvent); // Modifies event
  app.delete('/api/v1/event/:id', Event.deleteEvent); // deletes event
  //app.post('/api/v1/center', Validator.addCenterValidator, Center.addCenter);// Post Events
  app.put('/api/v1/center/:id', Center.editCenter); // Modifies center
  app.get('/api/v1/center', Center.getAllCenters); // details of all centers
  app.get('/api/v1/center/:id', Center.getCenterById); // get all centers
};

export default routes;
