import java.util.*;
import java.util.stream.Collectors;

enum RoomFeature {
    PROJECTOR,
    VIDEO_CONFERENCING,
    WHITEBOARD,
    CONFERENCE_PHONE,
    AIR_CONDITIONING
}


class MeetingRoom {
    private final String id;
    private final String name;
    private final int capacity;
    private final EnumSet<RoomFeature> features;

    public MeetingRoom(String id, String name, int capacity, EnumSet<RoomFeature> features) {
        this.id = id;
        this.name = name;
        this.capacity = capacity;
        this.features = features;
    }

    public String getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public EnumSet<RoomFeature> getFeatures() {
        return features;
    }
  public static void main(String[] args) {
        RoomScheduler scheduler = new RoomScheduler();
        scheduler.addMeetingRoom(new MeetingRoom("254", "Conference room", 45, EnumSet.of( RoomFeature.CONFERENCE_PHONE, RoomFeature.AIR_CONDITIONING)));
        scheduler.addMeetingRoom(new MeetingRoom("255", "Presentation room", 5, EnumSet.of(RoomFeature.VIDEO_CONFERENCING)));
        scheduler.addMeetingRoom(new MeetingRoom("256","Meditation room",7,EnumSet.of(RoomFeature.AIR_CONDITIONING)));
        scheduler.bookRoom("254", EnumSet.of(RoomFeature.CONFERENCE_PHONE));
        scheduler.listAvailableRooms(EnumSet.of(RoomFeature.AIR_CONDITIONING));
    }


}

class RoomScheduler {
    private final Map<String, MeetingRoom> rooms = new HashMap<>();

    public void addMeetingRoom(MeetingRoom room) {
        rooms.put(room.getId(), room);
        System.out.println("Room added: " + room.getName() + ", ID: " + room.getId());
    }


    public void bookRoom(String roomId, EnumSet<RoomFeature> requiredFeatures) {
        MeetingRoom room = rooms.get(roomId);
        if (room != null && room.getFeatures().containsAll(requiredFeatures)) {
            System.out.println("Room " + roomId + " booked successfully.");
        } else {
            System.out.println("Room " + roomId + " does not meet the requirements.");
        }
    }
    
    public void listAvailableRooms(EnumSet<RoomFeature> requiredFeatures) {
    List<String> availableRooms = new ArrayList<>();
    for (MeetingRoom room : rooms.values()) {
        if (room.getFeatures().containsAll(requiredFeatures)) {
            availableRooms.add(room.getName());
        }
    }
    System.out.println("Available rooms with " + requiredFeatures + ": " + availableRooms);
}  
}



  

