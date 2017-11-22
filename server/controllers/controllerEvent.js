import db from '../models/jsondata';
/**
 *
 *
 * @class Event
 */
class Event {
    /**
   *
   *
   * @param {any} req
   * @param {any} res
   * @returns {json} adds an event
   * @memberof Event
   */
  addEvent(req, res){
      const{
        userId, title, date, time, venue, details, centerId
      } = req.body;
      if (!userId){
          return res.status(400)
            .send('Event should have a owner')
      }
      if (!title){
        return res.status(400)
          .send('Event must have a title')
        }
        if (!date){
            return res.status(400)
            .send('Event must have a date')
        }
        if (!time){
            return res.status(400)
            .send('Event must have a time')
        }
        if (!venue){
            return res.status(400)
            .send('Event must have a venue')
        }
        if (!details){
            return res.status(400)
            .send('Event must have details')
        }
        if (!centerId){
            return res.status(400)
            .send('Event must have a centerID')
        }
        const id = db.events.length + 1;
        const newEvent = {
            id,
            userId,
            title,
            date,
            time,
            venue,
            details,
            centerId
        };
        db.events.push(newEvent);
        return res.status(201)
            .json({
                status: 'sucess',
                message: 'event added',
                event: newEvent
            });
    }
}

const event = new Event();

export default event;