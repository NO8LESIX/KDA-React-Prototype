import { UpdateList } from "../Data/types"

export const TestUpdates: UpdateList = {
    "SAMPLE UPDATE 1":
    {
        title: "SAMPLE UPDATE 1",
        preview: "Lorem ipsum dolor sit amet, an aeque vituperatoribus has",
        description: "Lorem ipsum dolor sit amet, an aeque vituperatoribus has, sed solum maluisset at, ad mei hinc indoctum. Stet ullum antiopam id mea, quem omnis ponderum per at, veniam utroque eam eu. Eam illud consul ea, laboramus contentiones an vim. Nam dicant facilis in, no elitr ubique sadipscing sed. Vel alii intellegat eu, regione eloquentiam instructior vis cu, vis no veritus epicuri voluptua. Cu eos eius detracto, est vocent evertitur ne. No nam diam populo ancillae, meis paulo euismod in pri. An vix ceteros verterem persecuti. Ex albucius splendide has. Stet velit falli usu cu, ex deseruisse argumentum mediocritatem pri. Ne habeo perfecto pro, alii dicam nonumy est an, possit ocurreret ad pri. Labores minimum ei mel. No homero munere fastidii est, cu detracto perfecto postulant sit, ut tibique expetenda urbanitas eos. Duo in doming facilisi intellegebat, eos habeo fuisset ullamcorper eu, an eos laudem percipit.",
        date: ("08-30-2020")
    },
    "SAMPLE UPDATE 2":
    {
        title: "SAMPLE UPDATE 2",
        description: "Lorem Upsum",
        date: ("09-01-2020")
    },
    "SAMPLE UPDATE 3":
    {
        title: "SAMPLE UPDATE 3",
        preview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad min...",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        date: ("09-01-2020")
    },
    "SAMPLE UPDATE 4":
    {
        title: "SAMPLE UPDATE 4",
        description: "Lorem Upsum",
        date: ("09-03-2020")
    },
    "SAMPLE UPDATE 5":
    {
        title: "SAMPLE UPDATE 5",
        preview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad min...",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        date: ("09-04-2020")
    },
    

}

export function parseDate(date: string): Date {

    return new Date(date);

}


