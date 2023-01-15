import React, { useEffect, useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import UserCard from "./user-card";
const UserCards = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading]= useState(true);
  
    /* fetch("https://63c2f11fe3abfa59bdb61a48.mockapi.io/api/v1/users")
    .then((resp) => resp.json())
    .then((data) => useState(data)); */ /* burdan cevap gelmeden return render ediliyor ansenkron yapi. 
    burda surekli cagrilacagi icin useEffect icine aldik*/

    useEffect(() => {
        fetch("https://63c2f11fe3abfa59bdb61a48.mockapi.io/api/v1/users")
          .then((resp) => resp.json())
          .then((data) => { 
            setUsers(data);
            setLoading(false);
        });
      }, []);

      
      return (
        <Container className="mt-5">
           {loading && <Spinner animation="border" variant="primary" />} 
          <Row className="g-4">
            {users.map((user) => (
              <Col key={user.id} sm={6} md={4} lg={3} xl={2}>
                <UserCard {...user} />
              </Col>
            ))}
          </Row>
        </Container>
      );
    };
    export default UserCards;