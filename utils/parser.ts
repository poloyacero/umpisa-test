
type Data = {
    id: String,
    name: String,
    area: String,
    isFree: Boolean,
    isProcessing: Boolean
}

export default async function parser (data: any) {
    let dataArray: Data[] = [];

    data.map((item: any) => {
        const obj: Data = {
            id: item._id,
            name: item.name,
            area: item.area,
            isFree: item.isFree,
            isProcessing: item.isProcessing,
          };

        dataArray.push(obj)
    })

    return dataArray
}