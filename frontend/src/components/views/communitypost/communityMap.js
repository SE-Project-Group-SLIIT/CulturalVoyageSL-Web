import {
    Box,
    Button,
    ButtonGroup,
    Flex,
    HStack,
    IconButton,
    Input,
    SkeletonText,
    Text,
} from '@chakra-ui/react'
import { FaLocationArrow, FaTimes } from 'react-icons/fa'
import { BsCarFront } from 'react-icons/bs'
import NavBar from '../shared/NavBar';
import {
    useJsApiLoader,
    GoogleMap,
    Marker,
    Autocomplete,
    DirectionsRenderer,
} from '@react-google-maps/api'
import { useRef, useState } from 'react'
import { Row } from 'react-bootstrap'
import FooterBar from '../shared/FooterBar';

const center = { lat: 48.8584, lng: 2.2945 }

function CommunityMap() {
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries: ['places'],
    })

    const [map, setMap] = useState(/** @type google.maps.Map */(null))
    const [directionsResponse, setDirectionsResponse] = useState(null)
    const [distance, setDistance] = useState('')
    const [duration, setDuration] = useState('')

    /** @type React.MutableRefObject<HTMLInputElement> */
    const originRef = useRef()
    /** @type React.MutableRefObject<HTMLInputElement> */
    const destiantionRef = useRef()

    if (!isLoaded) {
        return <SkeletonText />
    }

    async function calculateRoute() {
        if (originRef.current.value === '' || destiantionRef.current.value === '') {
            return
        }
        // eslint-disable-next-line no-undef
        const directionsService = new google.maps.DirectionsService()
        const results = await directionsService.route({
            origin: originRef.current.value,
            destination: destiantionRef.current.value,
            // eslint-disable-next-line no-undef
            travelMode: google.maps.TravelMode.DRIVING,
        })
        setDirectionsResponse(results)
        setDistance(results.routes[0].legs[0].distance.text)
        setDuration(results.routes[0].legs[0].duration.text)
    }

    function clearRoute() {
        setDirectionsResponse(null)
        setDistance('')
        setDuration('')
        originRef.current.value = ''
        destiantionRef.current.value = ''
    }

    return (
        <>
            <NavBar />
            <div class="row justify-content-center">
                <div class="col-1"></div>
                <div class="col">
                    <Flex
                        position='relative'
                        flexDirection='column'
                        alignItems='center'
                        h='70vh'
                    >
                        <Box position='absolute' left={0} top={0} h='100%' w='100%'>
                            {/* Google Map Box */}
                            <GoogleMap
                                center={center}
                                zoom={15}
                                mapContainerStyle={{ width: '100%', height: '100%' }}
                                options={{
                                    zoomControl: false,
                                    streetViewControl: false,
                                    mapTypeControl: false,
                                    fullscreenControl: false,
                                }}
                                onLoad={map => setMap(map)}
                            >
                                <Marker position={center} />
                                {directionsResponse && (
                                    <DirectionsRenderer directions={directionsResponse} />
                                )}
                            </GoogleMap>
                        </Box>
                        <Box
                            p={4}
                            borderRadius='lg'
                            m={4}
                            bgColor='white'
                            shadow='base'
                            minW='container.md'
                            zIndex='1'
                        >
                            <HStack spacing={2} justifyContent='space-between'>
                                <Box flexGrow={1}>
                                    <Autocomplete>
                                        <Input type='text' placeholder='Origin' ref={originRef} />
                                    </Autocomplete>
                                </Box>
                                <Box flexGrow={1}>
                                    <Autocomplete>
                                        <Input
                                            type='text'
                                            placeholder='Destination'
                                            ref={destiantionRef}
                                        />
                                    </Autocomplete>
                                </Box>

                                <ButtonGroup>
                                    <Button colorScheme='pink' type='submit' onClick={calculateRoute}>
                                        Calculate Route
                                    </Button>
                                    <IconButton
                                        aria-label='center back'
                                        icon={<FaTimes />}
                                        onClick={clearRoute}
                                    />
                                </ButtonGroup>
                            </HStack>
                            <HStack spacing={4} mt={4} justifyContent='space-between'>
                                <Text>Distance: {distance} </Text>
                                <Text>Duration: {duration} </Text>
                                <IconButton
                                    aria-label='center back'
                                    icon={<FaLocationArrow />}
                                    isRound
                                    onClick={() => {
                                        map.panTo(center)
                                        map.setZoom(15)
                                    }}
                                />
                            </HStack>
                        </Box>
                    </Flex>
                </div>
                <div class="col-1"></div>
            </div>
            <div class="row">
                <div class="col-4"></div>
                <div class="col-4 justify-content-center">
                    {distance &&
                        <div className="card  p-0 mt-3">
                            <div className="card-header text-white  bg-dark">
                            <h3>Travel Details</h3>
                            </div>
                            <div className='card-body p-0 m-0 d-flex flex-column justify-content-center'>
                                <Row style={{ marginRight: 20 }}>
                                    <h4>Travel Vehicle Details</h4>

                                    <div className='d-flex flex-row justify-content-center'>
                                        <img src="https://img.freepik.com/free-vector/flat-design-indian-man-driving-van_23-2149757883.jpg?size=626&ext=jpg&ga=GA1.2.1633300079.1682609697&semt=ais" class="rounded" alt="Profile pic" style={{ width: 80, height: 80 }} />
                                        <div  className='d-flex flex-column justify-content-center'>
                                        <p className='d-flex justify-content-left pb-0 mb-0' style={{ marginLeft: 10 }}><strong>three wheeler</strong></p>
                                        <p className='d-flex justify-content-left pb-0 mb-0' style={{ marginLeft: 10 }}><strong>Rs: </strong>  {parseFloat(distance) * 120}</p>
                                        </div>
                                        
                                    </div>
                                    <div className='d-flex flex-row justify-content-center'>
                                        <img src="https://img.freepik.com/free-vector/driving-concept-illustration_114360-11043.jpg?size=626&ext=jpg&ga=GA1.1.1633300079.1682609697&semt=sph" class="rounded" alt="Profile pic" style={{ width: 80, height: 80 }} />
                                        <div  className='d-flex flex-column justify-content-center'>
                                        <p className='d-flex justify-content-left pb-0 mb-0' style={{ marginLeft: 10 }}><strong>Car (4 sheets)</strong></p>
                                        <p className='d-flex justify-content-left pb-0 mb-0' style={{ marginLeft: 10 }}><strong> Rs:</strong>  {parseFloat(distance) * 320}</p>
                                        </div>
                                        
                                    </div>
                                    <div className='d-flex flex-row justify-content-center'>
                                        <img src="https://img.freepik.com/free-psd/delivery-3d-illustration-with-person-leaning-against-van_23-2149449428.jpg?size=626&ext=jpg&ga=GA1.1.1633300079.1682609697&semt=sph" class="rounded" alt="Profile pic" style={{ width: 80, height: 80 }} />
                                        <div  className='d-flex flex-column justify-content-center'>
                                        <p className='d-flex justify-content-left pb-0 mb-0' style={{ marginLeft: 10 }}><strong>Van (10 sheets)</strong></p>
                                        <p className='d-flex justify-content-left pb-0 mb-0' style={{ marginLeft: 10 }}><strong> Rs:</strong>  {parseFloat(distance) * 500}</p>
                                        </div>
                                        
                                    </div>
                                </Row>
                                <Row> 
                                <h4>About Area Details</h4>
                                <div className='d-flex flex-row justify-content-center'>
                                        <div  className='d-flex flex-column justify-content-center'>
                                        <p className='d-flex justify-content-left pb-0 mb-0' style={{ marginLeft: 10 }}><strong>Time Duration {duration}</strong></p>
                                        <p className='d-flex justify-content-left pb-0 mb-0' style={{ marginLeft: 10 }}><strong> Overall Cost to travel : </strong>  {parseFloat(distance) * 200}</p>
                                        </div>
                                        
                                    </div>
                                </Row>
                            </div>
                        </div>}
                </div>
                <div class="col-4"></div>
            </div>
            <FooterBar />
        </>
    )
}

export default CommunityMap