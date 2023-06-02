export interface PlaceData {
    address_components: AddressComponent[];
    formatted_address: string;
    name: string;
}

export interface AddressComponent {
    long_name: string;
    short_name: string;
    types: string[];
}
