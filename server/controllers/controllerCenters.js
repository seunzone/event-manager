import db from '../models/jsondata';
/**
 *
 *
 * @class Center
 */
class Center {
  /**
       *
       *
       * @param {any} req
       * @param {any} res
       * @returns {json} adds an center
       * @memberof Center
       */
  addCenter(req, res) {
    const {
      centerId, capacity, location, features, description
    } = req.body;

    const id = db.centers.length + 1;
    const newCenter = {
      id,
      centerId,
      capacity,
      location,
      features,
      description
    };
    db.centers.push(newCenter);
    return res.status(201)
      .json({
        status: 'sucess',
        message: 'center added',
        center: newCenter
      });
  }

  
}

const center = new Center();

export default center;

