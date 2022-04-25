import http from ".";

export const fetchLocations = async () => {
    try {
        const {
            data: { courses },
        } = await http.get(`${http.url}/courses`);
        return courses;
    } catch (err) {
        console.log(err);
    }
};
